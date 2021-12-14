# Decorator Pattern
---
[wiki](https://en.wikipedia.org/wiki/Decorator_pattern)
In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.[1] The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern.[2] Decorator use can be more efficient than subclassing, because an object's behavior can be augmented without defining an entirely new object. 
The decorator[3] design pattern is one of the twenty-three well-known GoF design patterns; these describe how to solve recurring design problems and design flexible and reusable object-oriented software—that is, objects which are easier to implement, change, test, and reuse.
What problems can it solve?

- Responsibilities should be added to (and removed from) an object dynamically at run-time.[4]
- A flexible alternative to subclassing for extending functionality should be provided.

When using subclassing, different subclasses extend a class in different ways. But an extension is bound to the class at compile-time and can't be changed at run-time.[citation needed]
What solution does it describe?

Define Decorator objects that

 -   implement the interface of the extended (decorated) object (Component) transparently by forwarding all requests to it
  -  perform additional functionality before/after forwarding a request.

This allows working with different Decorator objects to extend the functionality of an object dynamically at run-time.
See also the UML class and sequence diagram below. 

![UML](https://upload.wikimedia.org/wikipedia/commons/8/83/W3sDesign_Decorator_Design_Pattern_UML.jpg)
[back](../README.md)