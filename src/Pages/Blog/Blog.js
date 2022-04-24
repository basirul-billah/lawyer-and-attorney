import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Card className='w-50 mx-auto mt-4'>
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
            <Card className='w-50 mx-auto mt-4'>
                <Card.Header>
                    <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        I use firebase to authenticate user and using that authentication I can create user and perform sign in operation.
                        <br />
                        Some of the alternative to firebase authentication are Auth0, MongoDB, Passport, Okta.
                        <br />
                        Firebase can also be used to store data and perform operations on data. It can be used as a database for applications. It can be used for cloud messaging service, real time analytics etc.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='w-50 mx-auto mt-4 mb-4'>
                <Card.Header>
                    <Card.Title>What other services does firebase provide other than authentication</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Firebase can also be used to store data and perform operations on data. It can be used as a database for applications. It can be used for cloud messaging service, real time analytics etc.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;