'use client';

import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

type StudentScore = {
    id: number;
    name: string;
    scores: number | string;
};

function Assignment() {
    const [name, setName] = useState('');
    const [scores, setScores] = useState<number | string>(0);
    const [studentScoreList, setStudentScoreList] = useState<Array<StudentScore>>([]);
    const [studentGradList, setStudentGradList] = useState<Array<StudentScore>>([]);

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const scoreList = [];
        const studentScore = { id: studentScoreList.length + 1, name, scores };
        scoreList.push(studentScore);
        setStudentScoreList([...studentScoreList, ...scoreList]);
        setName('');
        setScores(0);
    };

    const handleScore = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target;
        value = value.replace(/^0+/, '');
        if (value.length >= 3) {
            value = value.slice(0, 3);
        }
        setScores(Number(value));
    };

    function calculateGrade(score: number) {
        let grade = '';

        if (score >= 0 && score <= 49) {
            grade = 'F';
        } else if (score >= 50 && score <= 59) {
            grade = 'E';
        } else if (score >= 60 && score <= 69) {
            grade = 'D';
        } else if (score >= 70 && score <= 79) {
            grade = 'C';
        } else if (score >= 80 && score <= 89) {
            grade = 'B';
        } else if (score >= 90 && score <= 100) {
            grade = 'A';
        }

        return grade;
    }

    const handleConvertGrading = () => {
        const convertedGrading: Array<StudentScore> = [];

        studentScoreList.forEach((studentScore) => {
            const grading = calculateGrade(Number(studentScore.scores));

            const convertedStudentScore = {
                id: studentScore.id,
                name: studentScore.name,
                scores: grading
            };

            convertedGrading.push(convertedStudentScore);
        });

        setStudentGradList(convertedGrading);
    };

    const handleReset = () => {
        setName('');
        setScores(0);
        setStudentScoreList([]);
        setStudentGradList([]);
    };

    const TableHeader = () => (
        <thead>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
    );

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <div className="d-flex">
                    <div className="me-2">
                        <Form.Label htmlFor="nameTextInput">Name</Form.Label>
                        <Form.Control
                            required
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            type="string"
                            id="nameTextInput"
                        />
                    </div>
                    <div className="ms-2">
                        <Form.Label htmlFor="scoreTextInput">Score</Form.Label>
                        <Form.Control
                            required
                            value={scores}
                            onChange={handleScore}
                            type="number"
                            min={0}
                            max={100}
                            onFocus={() => setScores('')}
                            onBlur={() => scores == '' && setScores(0)}
                            id="scoreTextInput"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Button className="mt-3" type="submit">
                        Add
                    </Button>
                </div>
            </Form>
            <Table striped>
                <TableHeader />
                <tbody>
                    {studentScoreList.length > 0 &&
                        studentScoreList.map((studentScore, index) => (
                            <tr key={index}>
                                <td>{studentScore.id}</td>
                                <td>{studentScore.name}</td>
                                <td>{studentScore.scores}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            {studentScoreList.length > 0 && (
                <div>
                    <Button onClick={handleConvertGrading}>Convert to Grading</Button>
                </div>
            )}

            {studentGradList.length > 0 && (
                <>
                    <div className="mt-2">
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                    <Table striped>
                        <TableHeader />
                        <tbody>
                            {studentGradList.map((studentGrade, index) => (
                                <tr key={index}>
                                    <td>{studentGrade.id}</td>
                                    <td>{studentGrade.name}</td>
                                    <td>{studentGrade.scores}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </div>
    );
}

export default Assignment;
