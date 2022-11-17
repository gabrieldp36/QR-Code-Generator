# Aplicación de consola: QR Code Generator.

Esta aplicación te permite crear tus propios códigos QRs personalizados. 

La misma trabaja leyendo un archivo data.csv, el cual opera como base de datos.

En cada ejecución se reduce la base de datos (data.csv) en idéntica proporción al número de QRs generados.

Los QRs se generan en forma numerada, pudiendo ser distribuidos en determinada cantidad por directorio a ser creado.

Las carpetas dónde se almacenan los QRs que san sido generados, también se encuentran numeradas.

## Notas:

```
Opciones:
      --help           Muestra ayuda                                  [booleano]

      --version        Muestra número de versión                      [booleano]

  -c, --cantidad       Representa la cantidad de QRs a ser generados.
                                                        [número] [defecto: 8100]

      --ca, --carpeta  Es el número de QRs que serán guardados por directorio.
                                                         [número] [defecto: 200]

      --co, --color    Representa el color con el que se creará el código QR. Se
                       debe enviar el código hexadecimal del respectivo color.
                       Ejemplo: '#26FDC5'
                                     [cadena de caracteres] [defecto: "#26FDC5"]

  -f, --fondo          Representa el color de fondo de la imagen del código QR.
                       Se debe enviar el código hexadecimal del respectivo
                       color. Ejemplo: '#973CCE'
                                     [cadena de caracteres] [defecto: "#973CCE"]

  -i, --imagen         Define el formato de imagen con el que se creará el QR.
                       Se admiten únicamente los siguientes formatos: png o svg.
                                         [cadena de caracteres] [defecto: "png"]

  -r, --resetear       Resetea el contador de carpetas y QRs generados hasta el
                       momento, , eliminando todos los directorios y QRs que hayan 
                       sido previamente creados.      
                                        [cadena de caracteres] [defecto: "false"]
```

Recuerden reconstuir los módulos de Node:

```
npm install
```

Y luego, para correr la aplicación, ejecuten en consola por ejemplo el siguiente comando:

```
node index --cantidad 20  --carpeta 4 --color '#288BA8' --fondo '#FFCE30' --imagen png
```