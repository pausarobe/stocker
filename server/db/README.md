# categoria de productos

    - Accesorios
    - Accesorios Baño
    - Accesorios Cocina
    - Calefacción
    - Cerámica
    - Electrodomésticos
    - Griferia
    - Iluminación
    - Mobiliario
    - Mobiliario Baño
    - Mobiliario Cocina
    - Pintura
    - Sanitarios
    - Suelo Laminado

# import / export json data to / from db

```bash
$ mongoimport -d stocker -c obras --drop --jsonArray --file data/obras.json

$ mongoimport -d stocker -c stocks --drop --jsonArray --file data/stocks.json 

$ mongoexport -d stocker -c obras --jsonArray -o data/obras.json

$ mongoexport -d stocker -c stocks --jsonArray -o data/stocks.json
```

# import json a mlab

```bash
$ mongoimport -h ds111876.mlab.com:11876 -d stocker -c stocks -u *** -p *** --drop --jsonArray --file data/stocks.json

$ mongoimport -h ds111876.mlab.com:11876 -d stocker -c obras -u *** -p *** --drop --jsonArray --file data/obras.json
```

