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
$ mongoimport -d stocker -c obras --drop --jsonArray --file server/db/data/obras.json

$ mongoimport -d stocker -c stocks --drop --jsonArray --file server/db/data/stocks.json 
```

