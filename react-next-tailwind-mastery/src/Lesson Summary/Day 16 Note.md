**SPACING & SIZING**

_**SPACING CREATES**_
Grouping
Hierarchy
Readability
Rhythm
Touch comfort
Visual calm

The Box Model:
┌─────────────────────────────┐
│ MARGIN │
│ ┌─────────────────────┐ │
│ │ BORDER │ │
│ │ ┌───────────────┐ │ │
│ │ │ PADDING │ │ │
│ │ │ ┌───────┐ │ │ │
│ │ │ │CONTENT│ │ │ │
│ │ │ └───────┘ │ │ │
│ │ └───────────────┘ │ │
│ └─────────────────────┘ │
└─────────────────────────────┘

**Tailwind** currently calculates numeric spacing utilities using its --spacing variable whose default is **0.25 rem(4px)**
p-1: 0.25rem ≈ 4px
p-2: 0.5 0rem ≈ 8px
p-3: 0.75rem ≈ 12px
p-4: 0. 1rem ≈ 16px
p-5: 1.25rem ≈ 20px
p-6: 1.5 rem ≈ 24px
p-8: 2rem ≈ 32px

This is a bad architecture:

```tsx
<button className="mr-4">Previous</button>
<button className="mr-4">Next</button>
<button>Checkout</button>

//This is a good architecture

<div className="flex gap-4">
  <button>Previous</button>
  <button>Next</button>
  <button>Checkout</button>
</div>
//Parent owns spacing between children.


//9. Three Different Types of Space

   // 1. Component Internal Spacing

    className="p-6"

    //2. Spacing Between related children
    className="gap-3"
    [-] [1] [+]
    //Spacing Between sections

    className="mt-10"

//10. Spacing Communicate Relationship
"iPhone 14 Pro Max"
₦950,000


Quantity
[-] 1 [+]
//Product  name is related to its price, so they are close to each other, but the **Qantity** is another section of information, so it has a larger spacing.
//So
//Small spacing → strong relationship.

// Large spacing → weak relationship / new section.

// ***VERY IMPORTANT***
```

_**SIZING**
_WIDTH_

w-full : 100%

```tsx
className = "w-full max-w-sm";
//Keep growing but dont pass the maximum space

className = "w-full max-w-sm mx-auto";
//Keep growing but dont pass the maximum space and automatically distribute horizontal margin
```

w-full: Flexible
max-w-sm: Constrained

_HEIGHT_

```tsx
className = "min-h-screen";
//Even when the pag ehas little content, fill the screen
//Use
className = "h-96";
// w-*      → preferred/set width
// min-w-*  → floor
// max-w-*  → ceiling

//MUST KNOW BY HEART
{
  /*
p-   padding
m-   margin

px-  horizontal padding
py-  vertical padding

mt-  margin top
mb-  margin bottom

gap- space between flex/grid children

w-      width
h-      height
size-   width + height

min-w-  minimum width
max-w-  maximum width

w-full  take available width
mx-auto center constrained block horizontally
min-h-screen at least viewport height
*/
}
```
