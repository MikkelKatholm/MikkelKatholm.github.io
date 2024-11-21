from notion_client import Client
from pprint import pprint
import json

debug = False
notion_token = open('api_key.txt', 'r').read().strip()
notion_page_id = '9f6919e413244cd7884f22f39f1eb5e0'
notion_database_id = 'f58f50cd6a1e47a98d0ac773963fe95a'


class wine:
    def __init__(self, name, buyAgain, etiquette, grape, mRating, openDay, pRating, price, typeWine, year, latitude, longitude):
        self.name = name
        self.buyAgain = buyAgain
        self.etiquette = etiquette
        self.grape = grape
        self.mRating = mRating
        self.openDay = openDay
        self.pRating = pRating
        self.price = price
        self.typeWine = typeWine
        self.year = year
        self.latitude = latitude
        self.longitude = longitude

    def __str__(self):
        return f"Name: {self.name}\nBuy Again: {self.buyAgain}\nEtiquette: {self.etiquette}\nGrape: {self.grape}\nM Rating {self.mRating}\nOpen Day: {self.openDay}\nP Rating: {self.pRating}\nPrice: {self.price}\nType: {self.typeWine}\nYear: {self.year}\nLatitude: {self.latitude}\nLongitude: {self.longitude}\n"


def save_as_json(content, file_name):
    if debug:        
        content_as_json_str = json.dumps(content)

        with open(file_name, 'w') as f:
            f.write(content_as_json_str)


def get_database_content(data,dot_chained_keys):
    '''
        {'a': {'b': [{'c': 1}]}}
        safe_get(data, 'a.b.0.c') -> 1
    '''
    keys = dot_chained_keys.split('.')
    for key in keys:
        try:
            if isinstance(data, list):
                data = data[int(key)]
            else:
                data = data[key]
        except (KeyError, TypeError, IndexError):
            return None
    return data

def get_database_content_all_vals(data,dot_chained_keys):
    '''
        {'a': {'b': [{'c': 1}, {'c': 2}]}}
        safe_get(data, 'a.b.0.c') -> [1, 2]
    '''

    keys = dot_chained_keys.split('.')
    last_key = keys[-1]
    keys = keys[:-1]
    for key in keys:
        try:
            if isinstance(data, list):
                data = data[int(key)]
            else:
                data = data[key]
        except (KeyError, TypeError, IndexError):
            return None

    return [item[last_key] for item in data]

def download_image(url, file_name):
    import requests
    import os.path
    # Check if the image is already downloaded
    if os.path.isfile("images/wineEttiqettes/"+file_name+".jpg"):
        return

    print(f"Downloading {file_name}")
    response = requests.get(url)
    with open("images/wineEttiqettes/"+file_name+".jpg", 'wb') as f:
        f.write(response.content)



def get_data():
    client = Client(auth=notion_token)

    db_data = client.databases.retrieve(database_id=notion_database_id)
    save_as_json(db_data, 'database_metadata.json')

    # Get the database content
    database_content = client.databases.query(database_id=notion_database_id)
    save_as_json(database_content, 'database_content.json')

    wines = []
    for row in database_content['results']:
        name = get_database_content(row, 'properties.Name.title.0.plain_text')            
        buyAgain = get_database_content(row, 'properties.Buy again.select.name')
        country = '' 
        region = ''
        etiquetteUrl = get_database_content(row, 'properties.Etiquette.files.0.file.url')
        grape = get_database_content_all_vals(row, 'properties.Grape.multi_select.name')
        mRating = get_database_content(row, 'properties.M Rating.select.name')
        openDay = get_database_content(row, 'properties.Open Day.date.start')
        pRating = get_database_content(row, 'properties.P Rating.select.name')
        price = get_database_content(row, 'properties.Price.number')
        typeWine = get_database_content(row, 'properties.Type.select.name')
        year = get_database_content(row, 'properties.Year.number')
        producer = ''
        latitude = get_database_content(row, 'properties.Latitude.rollup.array.0.number')
        longitude = get_database_content(row, 'properties.Longitude.rollup.array.0.number')

        etiquette = name.replace(" ", "_")

        download_image(etiquetteUrl, etiquette)

        vin = wine(name, buyAgain, etiquette, grape, mRating, openDay, pRating, price, typeWine, year, latitude, longitude)
        wines.append(vin)


    return wines




if __name__ == '__main__':
    if debug:
        wines = get_data()
        for w in wines:
            print(w)
