'use client';

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Assignment() {
    const [text, setText] = useState('');
    const [result, setResult] = useState<string | null>(null);

    function getFirstNumeric(text: string) {
        const numericRegex = /\d/;

        for (let i = 0; i < text.length; i++) {
            if (numericRegex.test(text[i])) {
                return text[i];
            }
        }

        return '';
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult(getFirstNumeric(text));
    };

    const handleRest = () => {
        setText('');
        setResult(null);
    };

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Label htmlFor="textInput">Enter Text</Form.Label>
                <Form.Control
                    required
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    type="string"
                    id="textInput"
                />

                <Button className="mt-3" type="submit">
                    Submit
                </Button>
            </Form>
            {result != null && (
                <div className="mt-2">
                    <div>The Result is : {result ? result : 'There is no number in the text'}</div>
                    <Button onClick={handleRest}>Rest</Button>
                </div>
            )}
        </div>
    );
}

export default Assignment;
