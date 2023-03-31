`file_in_exclude_array_tsconfig.ts` file is simply created

we have 3 options
    "rootDir": "./src"
    "rootDir": "./"
    dont mention rootDir at all         


`"rootDir": "./src"`
- all .ts files must be within src folder (must be within the rootDir folder)
- outside src folder, there shouldnt be any ts files
- if you also want to have another .ts file outside rootDir 
    and dont want ts compiler to throw error...
- so, we add the said file (which is outside rootDir ie src folder) in exclude array
- now, tsc compiler will simply ignore this file and not create corresponding js file in dist folder
- <dist folder> will contain only those files present in <src folder>
- you cant access any stuff ie outside src folder    
    import packageJson from '../package.json';
    this throws error ---> cause package.json is outside <src folder>

`"rootDir": "./"`
- <dist folder> will be similar to project structure
- all files outside <src folder> will also be present in <dist folder>


`dont mention rootDir at all`
- typescript decides appropriately 


sometimes, tsconfig.json ----> wont immediately throw error...
- then, you need to do this... 
    open any typescript file;       .ts extension
    Ctrl + Shift + P ---> typescript restart typescrit server
- then, error will appear