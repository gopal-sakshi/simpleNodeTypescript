OPTIONS
- interfaces
- classes
- types           
    // types = same as interfaces, but slight differences    
    // https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
    // https://passionfordev.com/typescript-classes-vs-interfaces/
    // https://jameshenry.blog/typescript-classes-vs-interfaces/
- functional programming

# INTERFACES 
- Allow for defining a type that will be used during design & compile time for strong typing. 
- They can be 
        implemented
        extended            // interfaces can be `extended ONLY by interfaces`; Classes can only implement interfaces, not extend
        instantiated --- not possible (meaning, you can't new them). 
- They get removed when transpiling down to JS so they take up no space, but they also cannot be type checked during runtime
- Usage
    when you want a blueprint of an object.... and that object will be used at many places
        Ex: object is used in       file1.ts,       file2.ts,       file3.ts
    when you want all objects to start with base set of properties
        Ex: Car, Bus, Train ------------> all are of 'vehicle interface'   
                                    ----> PROPERTIES = speed, color, wheelCount, passengerCount,
                                    ----> METHODS = startEngine(), stopEngine(), deboardPassengers(), soundHorn()
- Dont Use Interfaces
    when you want to have 
        default values, 
        implementations, 
        constructors,
        functions (not just signatures)
    
    
# CLASSES
- Allow for defining a type that will be used during design & compile time for strong typing.... plus used during runtime also 
- Classes 
        instantiated (using new keyword)
        extended
        implemented (not possible)
- Code isnt compiled out... meaning, classes can be typechecked, even in transpiled JS code
- Usage
    create objects that have 
        actual function code in them, 
        have a constructor for initialization, 
        want to create instances of them with new
    use classes for setting up default values

