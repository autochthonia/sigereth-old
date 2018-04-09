import { Editor } from 'slate-react';
import { Value } from 'slate';
import { css, cx } from 'emotion';
import React, { Component } from 'react';
import Plain from 'slate-plain-serializer';

/**
 * TODO:
 * Select text on tab
 * Put cursor at beginning of placeholder
 */

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.plain
        ? Plain.deserialize(props.content)
        : Value.fromJSON({
            document: {
              nodes: [
                {
                  object: 'block',
                  type: props.multi ? 'paragraph' : 'span',
                  nodes: [
                    {
                      object: 'text',
                      leaves: [
                        {
                          text: props.content,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          }),
    };
  }

  _onKeyDown = (event, change) => {
    if (event.key != 'Enter') return;
    event.preventDefault();
    change.blur();
    return true;
  };

  _onChange = ({ value }) =>
    // Look for if value !== this.state.value or something to prevent extra changes
    this.setState({ value }, () => this.props.onChange(Plain.serialize(value), this.props.name));

  _renderPlaceholder = props => {
    const { node, editor } = props;
    if (node.object != 'block') return;
    // if (node.type != 'caption') return;
    if (node.text != '') return;
    return (
      <span
        contentEditable={false}
        style={{ display: 'inline-block', whiteSpace: 'nowrap', opacity: '0.33', pointerEvents: 'none' }}
      >
        {editor.props.placeholder}
      </span>
    );
  };

  render() {
    const { className, content, multi, el: Element, ...props } = this.props;
    const { value } = this.state;
    return (
      <Editor
        {...props}
        className={cx(className, css({ display: multi ? 'block' : 'inline-block' }))}
        value={value}
        onChange={this._onChange}
        renderPlaceholder={this._renderPlaceholder}
        onKeyDown={this._onKeyDown}
      />
    );
  }
}
