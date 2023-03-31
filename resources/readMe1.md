git init
    .git file
npm init -y
    creates package.json with default values
npm install -g typescript
    insalls typescript globally...
tsc --init
    creates tsconfig.json file
    its a typescript configuration file... it specifies typescript compiler options
    tsc (typescript compiler) reads these options ---> and transpiles ".ts files" ----> browser readable ".js files"


npm install -D typescript
    advisable to have typescript compiler installed in your project's local dependencies
-----------------------------------------------------------------------------------------------------------------

Build:No inputs were found in config file --- tsconfig.json
- Add an empty typescript file to the typescript scripts folder
    if rootDir is not specified in tsconfig.json ---> add @ the location of your tsconfig file 
    if rootDir is present ----> add 'someTsfile.ts' in the path mentioned at rootDir

# "outDir": "./dist"
- dist folder will contain `js` files

# "rootDir": "./src"
- src folder will contain `ts` files
- if rootDir isnt mentioned `all and any` ts files --------> 
    will be compiled & corresponding js files will be created in dist folder
    ofcourse, exclude files will still be ignored

Note
- outside src folder, we shouldnt have any `ts` files
- blah.ts is not inside rootDir
    rootDir is expected to contain all source files

# files
- only the individual files mentioned in this array ---> they will be compiled
    corresponding js files will be created in `dist folder`
- even the files in include array of tsconfig.json ----> ignored


`tsc`
- this command -------> will create dist folder... with corresponding js files
- navigate to the folder and run the `node addString.js`        ---> to get the output
-----------------------------------------------------------------------------------------------------------------