import * as React from 'react';

import { shallow } from 'enzyme';

import Editor, { IEditorProps } from '../Editor';

const componentDidMountSpy = jest.fn();

jest.spyOn(Editor.prototype, 'componentDidMount').mockImplementation(componentDidMountSpy);

test('Editor renders correctly', () => {
  const props: IEditorProps = {
    breakpoints: [],
    editorSessionId: '',
    editorValue: '',
    highlightedLines: [],
    isEditorAutorun: false,
    sharedbAceInitValue: '',
    sharedbAceIsInviting: false,
    handleEditorEval: () => {},
    handleEditorValueChange: newCode => {},
    handleEditorUpdateBreakpoints: breakpoints => {},
    handleFinishInvite: () => {},
    handleSetWebsocketStatus: websocketStatus => {},
    handleUpdateHasUnsavedChanges: hasUnsavedChanges => {},
    handlePromptAutocomplete: (row: number, col: number, callback: any) => {}
  };
  const app = <Editor {...props} />;
  const tree = shallow(app);
  expect(tree.debug()).toMatchSnapshot();
  expect(componentDidMountSpy).toHaveBeenCalled();
});
