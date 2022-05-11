/*
    This file is simply created
    In tsconfig.json, we specified ----> rootDir folder
        rootDir: src/
    all source files (ie all .ts files) ------> must be within the rootDir folder
    but, we also want to have another .ts file outside rootDir 
        and dont want ts compiler to throw error...
    so, we add the said file (which is outside rootDir ie src folder) in exclude array
    now, tsc compiler will simply ignore this file and not create corresponding js file in dist folder

    sometimes, tsconfig.json ----> wont immediately throw error...
    - then, you need to do this... 
        open any typescript file;       .ts extension
        Ctrl + Shift + P ---> typescript restart typescrit server
    - then, error will appear

*/

export const UCL_TITLES = 13;