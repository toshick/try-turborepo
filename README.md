# Try Turborepo



you can run the same npm script in apps each package by adding pipeline in top package.json

### Sample: add `nyao` pipeline.

```
 "turbo": {
    "pipeline": {
      ...
      
      // add here
      "nyao": {
        "outputs": []
      }
    }
  },
```

Then add `nyao` command in each package.json

```
//apps/docs/package.json
scripts: {
	...
	"nyao": "echo 'nyaooooooooo (docs)'"
}

//apps/web/package.json
scripts: {
	...
	"nyao": "echo 'nyaooooooooo (web)'"
}

//packages/ui/package.json
scripts: {
	...
	"nyao": "echo 'nyaooooooooo (ui)'"
}
```

the result is here. (2nd time that is cached log)

```
npm run nyao
...
ui:nyao: cache hit, replaying output d101ae450a1f46ab
ui:nyao:
ui:nyao: > ui@0.0.0 nyao
ui:nyao: > echo 'nyaooooooooo (ui)'
ui:nyao:
ui:nyao: nyaooooooooo (ui)
docs:nyao: cache hit, replaying output 688746f6c6ed44af
docs:nyao:
docs:nyao: > docs@0.0.0 nyao
docs:nyao: > echo 'nyaooooooooo (docs)'
docs:nyao:
docs:nyao: nyaooooooooo (docs)
web:nyao: cache hit, replaying output 9d7db40b22e2404f
web:nyao:
web:nyao: > web@0.0.0 nyao
web:nyao: > echo 'nyaooooooooo (web)'
web:nyao:
web:nyao: nyaooooooooo (web)

 Tasks:    3 successful, 3 total
Cached:    3 cached, 3 total
  Time:    97ms >>> FULL TURBO
```

パッケージに追加しても同様
