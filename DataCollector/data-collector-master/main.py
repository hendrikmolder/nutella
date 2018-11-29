from collectors import weather, traffic

PATH = '../collected-data'

weather.weather_observations(PATH)
traffic.incidents(PATH)
