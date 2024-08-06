To build the custom select component, I focused on implementing several core functionalities to ensure versatility and ease of use.

**Selection Types**: The component supports both single and multiple value selections. For single-value selection, it uses a state to store the currently selected option, while for multiple values, an array is used to manage the selected options. This allows users to either pick one option or select several.

**Search Functionality**: I incorporated a searchable dropdown feature, where users can type in the input field to filter options dynamically. This ensures users can quickly find the option they are looking for, especially when dealing with a large list of options.

**Clear Options**: The component includes features for clearing selections. For single-value selection, users can clear the selected option with a clear button. In multi-select mode, each selected option has a clear icon, and there's also a “Clear All” button to reset all selections at once.

**Disabled State**: A disabled state is implemented, where the input field and other interactive elements are rendered inactive if the isDisabled prop is set to true. This ensures that users cannot interact with the component when it is meant to be inactive.

**Placeholder Text**: When no value is selected, a placeholder text is shown in the input field. This provides a prompt to users about the action they need to take to select an option.

**Event Handling**: The component is designed to handle various events such as changes in selection, opening of the dropdown menu, and search input changes. These events are managed through props, allowing for external actions or updates as needed.
