# Frontend Engineer for DesignSystems

## Task definition

- Implement the Datepicker component defined below.
- Split components as Atoms and Molecules as defined by the [**atomic design principles**](https://bradfrost.com/blog/post/atomic-web-design/)
- Use [**Storybook**](https://storybook.js.org/) as component explorer for your Atoms, Molecules and the Datepicker
- Styles must follow the [**SUIT**](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) convention
- Technologies to be used: **ES6**, **SCSS**, **React.js**

## What's to deliver

- Link to the source code, use your favorite repository manager (GitHub, GitLab, ...)
- Link to the deployed storybook with all the atoms, molecules and Datepicker as a Demo, use your favorite static site hosting platform (surge, github-pages, now, ...)

## Component definition - SUI Datepicker

The datepicker component allow users select specific dates or a range of dates.

## Structure

It's made of 2 parts:

- A form field
- A popover layer (initially hidden) that contains the calendar

These are the different characteristics of it:

- Form field:
	- [ ] It must have a placeholder text "select a date"
	- [ ] After date selection the input value has to show the selected date
- Popover:
	- [ ] It has to show 1 month at a time
	- [ ] Arrows to navigate from one month to the other
	- [ ] Days of the week from Sunday to Saturday
	- [ ] It's only possible to select one date at a time (no ranges are needed for this test)
	- [ ] The number of rows will depend on the month, but the height of the popover must always be the same.

## Behaviour

- [ ] The popover with the calendar must be initially closed.
- [ ] In order to show the calendar, the user has to click on the text field.
- [ ] Once a date is selected the calendar has to hide (little delay of 0.5s).
- [ ] The date selected must be shown in the field.
- [ ] To change the month, the user has to click on the arrows on top right and left.
- [ ] The dates can't be added manually in the form-field.

## Customisation

The datepicker component would be used in many brands, and each of them should be able to customise the following:

- Form field:
	- [ ] Date format to be shown after selection: 2 options only
	- [ ] Colour and width of the border: Only 2 options: none or solid 1px grey
	- [ ] Background color: any colour is valid
	- [x] Font size: only 3 sizes available (S_12px M_14px or L_16px)
	- [ ] Font colour: any color
- Popover:
	- [ ] Shadow: any valid CSS value is allowed
	- [ ] Background color: any colour is valid
	- [ ] Border: Only 2 options: none or solid 1px grey
- Calendar
	- [x] Font sizes: only 3 sizes available (S_12px M_14px or L_16px)
	- [ ] Font colour: any color
	- [ ] Background colour of each state: any color
	- [ ] Shape of the selected day indicator (only 2 options circle or square)

**Important notes:**

- You can use any icon for the arrows
- We don't define responsive behaviour, but it should work well in Mobile as well
- The spacing should be based on 8px grid
- The component should be easy to use in brands with different styles.

## Default visual style

![](https://paper-attachments.dropbox.com/s_5E16DF4258C3C0988EF484789BFF25C85D24B1C1AF84DD1A574A9E387A222915_1570002946159_DatePicker+for+Test.jpg)