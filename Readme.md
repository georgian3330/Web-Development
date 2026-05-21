# Web Development Tutorial 📚

## ✅ Frontend Development

**1. HTML (Hyper Text Markup Language)**

* Heading Elements
    * `<h1></h1>`
    : Main Page Title (H1)
    * `<h2></h2>`
    : Section Title (H2)
    * `<h3></h3>`
    : Subsection Title (H3)
    * `<h4></h4>`
    : Smaller Heading (H4)
    * `<h5></h5>`
    : Even Smaller Heading (H5)
    * `<h6></h6>`
    : Smallest Heading (H6)

* Paragraph Elements
    * `<p></p>`
    : used to define a paragraph.

* Self Closing Tags
    * `<hr />` 
    : Horizontal rule - used to create a horizontal rule (a horizontal line) that represents a thematic break in content.
    * `<br />`
    : Line Break Element - used to force text to continue on the next line.

* List Element
    | Ordered List | Unordered List |
    | ------------ | -------------- |
    | `<ol>`<br>&emsp;`<li>Item 1</li>`<br>&emsp;`<li>Item 2</li>`<br>`</ol>` | `<ul>`<br>&emsp;`<li>Item A</li>`<br>&emsp;`<li>Item B</li>`<br>`</ul>` |

* Nesting & Indentation
    * `Nesting`
    : placing one HTML element inside another to create a hierarchy or structure.
    * `Indentation`
    : adding spaces or tabs at the start of lines to visually represent the nesting level.

* Anchor Elements
    * `<a href="URL"></a>`
    : used to specify the destination of a hyperlink. It stands for Hypertext Reference and is a crucial part of the `<a>` (anchor) tag, which defines a hyperlink.

* Image Elements
    * `<img src="Image_URL" />`
    : used to embed images into a webpage. <br />The src attribute specifies the path or URL of the image file you want to display.

**2. CSS (Cascading Style Sheets)**

* **Inline CSS**
    > Used for only one element in HTML
    ```
    <opening_tag style="color:blue;">...</closing_tag>
    ```
* **Internal CSS**
    > Used for one webpage
    
    ``` 
    <head>
        <style>
                h1{
                    color:blue;
                }
        </style>
    </head>
    ```
    
* **External CSS**
    > Used for multi-webpages

    **index.html** File
    ```
    <head>
        <link rel="stylesheet" href="./style.css" />
    </head>
    ```
    **style.css** File
    ```
    h1{
        color:green;
    }
    ```

* CSS Selectors
    ```
    <css_selector>{
        property_1 : value;
        property_2 : value;
    }
    ```
    * Element Selector
    : `<html_element>`
    * Class Selector
    : `.<class_name>`
    * Id Selector
    : `#<Id_name>`
    * Attribute Selector
    : `<html_element>[<attribute_name]`
    * Universal Selector
    : `*`

* CSS Specificity
: a set of rules that determines which CSS styles are applied when multiple selectors target the same HTML element.

    * Specificity
    : Id > Attribute > Class > Element

    * Type
    : Inline CSS > Internal CSS > External CSS

    * Importance
    : `!important`

* Combining CSS Selector
    * Grouping
    * Child
    * Descendant
    * Chaining
    * Multiple Combiners

* CSS Positioning (`position`)
    * Static Positioning
    : Default position
    * Relative Positioning
    : Position relative to default position
    * Absolute Positioning
    : Position relative to nearest positioned ancestor or top left corner of webpage
    * Fixed Positioning
    : Position relative to top left corner of browser window

* CSS Display Property (`display`)
    * Block
    * Inline
    * Inline-Block
    * None

* CSS Float Property (`float`)
    * Left
    * Right
    > Clear Property
    : `clear` property is used to control the layout of an element in relation to floating elements.

* Responsive Web Design
: Responsive web design (RWD) is a web design approach to make web pages render well on all screen sizes and resolutions while ensuring good usability.

    * CSS Media Query
        ```
        @media(<feature1> : value) and (<feature2> : value){
            <css_selector> {
                <property1> : value;
                <property2> : value;
            }
        }
    ```
    * CSS Flexbox
    * CSS Grid
    * Bootstrap Framework


## ✅ Backend Development