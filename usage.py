import mapscale
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    mapscale.Mapscale(
        id='mapScaleId',
        value='100m',
    )
])




if __name__ == '__main__':
    app.run_server(debug=True)
