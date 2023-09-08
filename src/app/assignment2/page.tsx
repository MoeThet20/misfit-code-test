'use client';

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Assignment() {
    const [ipAddress, setIpAddress] = useState('');
    const [result, setResult] = useState<boolean | null>(null);

    function isValidIPv4(ipAddress: string) {
        const ipv4Regex = /^(?!0\d)(\d{1,3}\.){3}\d{1,3}$/;

        if (ipv4Regex.test(ipAddress)) {
            const octets = ipAddress.split('.');

            for (let i = 0; i < 4; i++) {
                const octet = parseInt(octets[i]);
                if (octet < 0 || octet > 255 || isNaN(octet) || octets[i] !== octet.toString()) {
                    return false;
                }
            }

            return true;
        }

        return false;
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult(isValidIPv4(ipAddress));
    };

    const handleRest = () => {
        setIpAddress('');
        setResult(null);
    };

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Label htmlFor="ipTextInput">Enter IP Address</Form.Label>
                <Form.Control
                    required
                    value={ipAddress}
                    onChange={(event) => setIpAddress(event.target.value)}
                    type="string"
                    id="ipTextInput"
                />

                <Button className="mt-3" type="submit">
                    Submit
                </Button>
            </Form>
            {result != null && (
                <div className="mt-2">
                    <div>The Result is : {result.toString().toUpperCase()}</div>
                    <Button onClick={handleRest}>Rest</Button>
                </div>
            )}
        </div>
    );
}

export default Assignment;
