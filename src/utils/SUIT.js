const condionalAddition = (condition, string) => (condition ? string : '');

/**
 * class SUIT
 * https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md
 *
 */
export default class SUIT {
  static #VAR_JOIN = '-';

  /**
   * createComponentName static method
   *
   * @param namespace {string}       - () If necessary, components can be prefixed with a namespace. For example, you may wish to avoid the potential for collisions between libraries and your custom components by prefixing all your components with a namespace.
   * @param componentName {string}   - (PascalCase) The component's name must be written in pascal case. Nothing else in the HTML/CSS uses pascal case.
   * @param descendentName {string}  - (camelCase) A component descendent is a class that is attached to a descendent node of a component. It's responsible for applying presentation directly to the descendent on behalf of a particular component. Descendent names must be written in camel case.
   * @param modifierName {string}    - (camelCase) A component modifier is a class that modifies the presentation of the base component in some form (e.g., for a certain configuration of the component). Modifier names must be written in camel case and be separated from the component name by two hyphens. The class should be included in the HTML in addition to the base component class.
   * @param componentState {string}  - (camelCase) Use is-stateName to reflect changes to a component's state. The state name must be camel case. Never style these classes directly; they should always be used as an adjoining class.
   * @returns {string}               - CONVENTION [<namespace>-]<ComponentName>[-descendentName][--modifierName]
   */
  static createComponentName(
    { namespace, componentName, descendentName, modifierName, componentState } = {
      componentName: 'ComponentName',
    },
  ) {
    if (componentState !== undefined) {
      // [<namespace>-]<ComponentName>[is-componentState]`
      return `
        ${`is${SUIT.#VAR_JOIN}${componentState}`}
      `;
    }
    // [<namespace>-]<ComponentName>[-descendentName][--modifierName]`
    return [
      condionalAddition(namespace !== undefined, `${namespace}${SUIT.#VAR_JOIN}`),
      `${componentName}`,
      condionalAddition(descendentName !== undefined, `${SUIT.#VAR_JOIN}${descendentName}`),
      condionalAddition(modifierName !== undefined, `${SUIT.#VAR_JOIN}${SUIT.#VAR_JOIN}${modifierName}`),
    ].join('');
  }
}
