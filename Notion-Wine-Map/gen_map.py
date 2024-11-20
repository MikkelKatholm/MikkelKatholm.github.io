import random
import folium
from folium.plugins import TagFilterButton
from folium.plugins import HeatMap
from load_notion_data import get_data


# Load data
wines = get_data()
latitudes = []
longitudes = []

def color_icon(buyAgain):
    switch = {
        '👍': 'green',
        '🫳(Tilbud)': 'orange',
        '👎': 'darkred',
    }
    return switch.get(buyAgain, 'blue')


def generate_map():
    filterCategories = []
    
    # Initialize a map
    wine_map = folium.Map(
        location=[46.0, 15.0], 
        tiles="CartoDB Positron", 
        zoom_start=4)

    # Add markers
    for wine in wines:
        lat, lon = wine.latitude, wine.longitude

        while lat in latitudes and lon in longitudes:
            lat = wine.latitude + random.uniform(-0.0001, 0.0001)
            lon = wine.longitude + random.uniform(-0.0001, 0.0001)


        location = [lat, lon]        
        latitudes.append(lat)
        longitudes.append(lon)
                
        if location[0] and location[1]:
            popup_content = f"""
            <b><a href={wine.etiquette} target="_blank">{wine.name}</a></b><br>
            Buy Again: {wine.buyAgain}
            Type: {wine.typeWine}<br>
            M Rating: {wine.mRating}<br>
            P Rating: {wine.pRating}<br>
            Price: {wine.price} DKK<br>
            Vintage: {'Non Vintage' if wine.year == 0 else wine.year}<br>
            """
            
            filterCategories.append("Type: " + wine.typeWine)
            filterCategories.append("Buy Again: " + wine.buyAgain)
            filterCategories.append("M Rating: " + wine.mRating)
            filterCategories.append("P Rating: " + wine.pRating)
            


            folium.Marker(
                location=location,
                popup=folium.Popup(popup_content, max_width=300),
                icon=folium.Icon(color=color_icon(wine.buyAgain)),
                tags=["Type: " + wine.typeWine, "Buy Again: " + wine.buyAgain, "M Rating: " + wine.mRating, "P Rating: " + wine.pRating]
            ).add_to(wine_map)
            
        else:
            print(f"Could not find location for {wine.name}")

    filterCategories = list(dict.fromkeys(filterCategories))
    filterCategories.sort()
    TagFilterButton(filterCategories).add_to(wine_map)
    HeatMap([[wine.latitude, wine.longitude] for wine in wines], radius=15).add_to(wine_map)

    # Save map to an HTML file
    wine_map.save("wine_map.html")

if __name__ == "__main__":
    generate_map()