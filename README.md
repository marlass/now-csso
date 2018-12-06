# now-csso

[Now builder](https://zeit.co/docs/v2/deployments/builders/overview/) for minifying css files with csso.

## Usage

``` json
{
    "version": 2,
    "builds": [
        { "src": "index.html", "use": "@now/static" },
        { "src": "styles.css", "use": "@marlas/now-csso" }
    ]
}

```
