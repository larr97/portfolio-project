# Week 10 Progress Journal

## Overview  
This week, I focused on implementing the **Resume subsystem**, extending language and theme integrations, and exploring Angular’s new reactivity model with signals.

## Completed Tasks  
- Implemented the **Resume subsystem**, storing and organizing resumes in the `public/resume/` folder.  
- Added support for **resumes in English and Spanish**, making them accessible depending on the selected language.  
- Integrated **Angular signals** to handle reactivity in the language subsystem, ensuring that UI and subsystem state respond seamlessly to language changes.  
- Extended **language translation coverage** to both the **Resume subsystem** and **Theme subsystem**, creating consistency across multiple domains.  

## Challenges  
- The development process was relatively smooth. The main challenge was learning and adapting to Angular’s new reactivity with signals. I didn’t end up using RxJS here—though that would have been my approach if signals weren’t available.

## Lessons Learned  
- Gained hands-on experience with [Angular signals](https://angular.dev/guide/signals), understanding how they simplify state management and reduce boilerplate compared to traditional [RxJS observables](https://rxjs.dev/guide/observable) approaches.    
- Learned how signals can naturally propagate changes across multiple subsystems (language, theme, resume) without requiring complex subscriptions or manual updates.  

## Next Steps  
- Begin development of the **Routing subsystem**, enabling structured navigation between different parts of the application.  