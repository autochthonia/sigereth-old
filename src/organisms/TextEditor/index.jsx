import { Editor } from 'slate-react';
import { Value } from 'slate';
import { css, cx } from 'emotion';
import { isNumber, noop, toNumber } from 'lodash';
import Plain from 'slate-plain-serializer';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

  // _onKeyDown = (event, change) => {
  //   if (this.props.number) {
  //     if (!isNaN(toNumber(event.key))) return;
  //     console.log('non number input blocked');
  //     event.preventDefault();
  //     return true;
  //   }
  //   if (event.key !== 'Enter') return;
  //   if (!this.props.multi) {
  //     event.preventDefault();
  //     change.blur();
  //     return true;
  //   }
  //   return;
  // };

  _onChange = ({ value }) => {
    if (value.document !== this.state.value.document) {
      console.log(Plain.serialize(value));
      this.setState({ value }, () =>
        this.props.onChange(
          this.props.number ? toNumber(Plain.serialize(value)) : Plain.serialize(value),
          this.props.name,
        ),
      );
    }
  };

  _renderPlaceholder = params => {
    const { node, editor } = params;
    if (node.object !== 'block') return;
    // if (node.type !== 'caption') return;
    if (node.text !== '') return;
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
    console.warn('rerender')
    return (
      <Editor
        className={cx(this.props.className, css({ display: this.props.multi ? 'block' : 'inline-block' }))}
        value={this.state.value}
        onChange={this._onChange}
        // renderPlaceholder={this._renderPlaceholder}
        // onKeyDown={this._onKeyDown}
      />
    );
  }
}

TextEditor.propTypes = {
  /** Whether editor contents are plain text or made from Value.fromJson */
  plain: PropTypes.bool,
  /** Content of editor */
  content: PropTypes.string,
  /** Multiline editor */
  multi: PropTypes.bool,
  /** Editor field name */
  name: PropTypes.string.isRequired,
  /** Optional className to style editor */
  className: PropTypes.string,
  /** onChange func receives value and name when editor changes */
  onChange: PropTypes.func,
  /** Should the output be sanitized into a number? (content needs to be string to work with cursor) */
  number: PropTypes.bool,
};

TextEditor.defaultProps = {
  plain: false,
  content: undefined,
  multi: false,
  className: '',
  onChange: noop,
  number: false,
};
