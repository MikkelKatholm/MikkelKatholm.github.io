from notion_client import Client
import pandas as pd
import folium
from folium.plugins import TagFilterButton

class site:
    def __init__(self, name, Latitude, Longitude, date_inscribed, short_description, unique_number, visited):
        self.name = name
        self.Latitude = Latitude
        self.Longitude = Longitude
        self.date_inscribed = date_inscribed
        self.short_description = short_description
        self.unique_number = unique_number
        self.visited = visited
    def __str__(self):
        return f"Name:\t\t {self.name}\nLatitude:\t {str(self.Latitude)}\nLongitude:\t {str(self.Longitude)}\nDate Inscribed:\t {str(self.date_inscribed)}\nDescription:\t {self.short_description}\nUnique Number:\t {str(self.unique_number)}\nVisited:\t {str(self.visited)}"



def gen_map(sites):
    def color_visited(visited):
        if visited == "No":
            return 'red'
        return 'green'
    filtercategories = ['Visited', 'Not Visited']
    
    siteMap = folium.Map(
        location=[46.0,15.0],
        tiles="CartoDB Positron", 
        zoom_start=4,
    )

    for site in sites:
        popupContent = f"""
        <b><a href="https://www.google.com/search?q={site.name}" target="_blank">{site.name}</a></b>
        <br>
        <i>{site.short_description}</i>
        <br>
        <b>Visited:</b> {site.visited}
        """
        visitedTag = "Visited" if site.visited =="Yes" else "Not Visited"

        folium.Marker(
            location=[site.Latitude, site.Longitude],
            popup=folium.Popup(popupContent, min_width=400, max_width=400),
            icon=folium.Icon(color=color_visited(site.visited)),
            tags = [visitedTag]
        ).add_to(siteMap)
    TagFilterButton(filtercategories).add_to(siteMap)

    siteMap.save('sites_map.html')
    
def get_data(file_name):
    data = pd.read_csv(file_name)
    sites = []
    for index, row in data.iterrows():
        sites.append(site(row['Name'], row['Latitude'], row['Longitude'], row['Date Inscribed'], row['Short Description'], row['Unique Number'], row['Visited']))
    return sites



def main():
    file_name = 'sites.csv'
    data = get_data(file_name)
    gen_map(data)


if __name__ == '__main__':
    main()