import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Card className='w-75 mx-auto mt-4'>
                <Card.Header>
                    <Card.Title>Difference between Authentication & Authorization</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Authentication</th>
                                    <th>Authorization</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Authentication verifies a user.</td>
                                    <td>Authorization gives access to specific resources to a user.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Authentication is enabled using passwords or other verifiable information from the user.</td>
                                    <td>The organization determines what to do with the resources specific users.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Authentication is the first step before authorization.</td>
                                    <td>Authorization is the second step followed by authentication.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Authentication information can be changed by user.</td>
                                    <td>Authorization cannot be changed by user.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;