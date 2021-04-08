import './Todolist.css';

import React from "react";

// eslint-disable-next-line no-unused-vars
import { Button, Container, Header, Icon, Image, List } from 'semantic-ui-react'

// eslint-disable-next-line no-unused-vars
import _ from "lodash";


export default class Todolist extends React.Component {
    state = {
        lieux: [] // lieux à visiter
    };

    componentDidMount() {

    let lieux = [];
    
    this.setState({
        lieux
    });

    }

    render() {
        return (
            <div className="Todolist">
                <Container text>
                    <Header as='h1'>Ma Todolit !</Header>
                    <section className="Todolist-section">
                        <Header as='h2'>Ma liste de lieux à visiter :</Header>
                        <article className="Todolist-article">
                            <List as='ol'>
                                <List.Item>
                                    <List.Header as='li' value='>'>France</List.Header>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Button>Add</Button>
                                    </List.Content>
                                    {/* <Image ville src='/images/ville/' /> */}
                                    <Icon name='right triangle' />
                                    <List.Content>
                                        <List.Header href="#">Nantes</List.Header>
                                        <List.Description>
                                        La métropole du Nord-Ouest à découvrir.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Button>Add</Button>
                                    </List.Content>
                                    {/* <Image ville src='/images/ville/' /> */}
                                    <Icon name='right triangle' />
                                    <List.Content>
                                        <List.Header href="#">Paris</List.Header>
                                        <List.Description>
                                        La capitale de la France, souvent associée à une image romantique.
                                        </List.Description>
                                    </List.Content>
                                </List.Item> 
                                <List.Item>
                                    <List.Header as='li' value='*'>Etranger</List.Header>
                                </List.Item>
                                    <List.Item>
                                        <List.Content floated='right'>
                                            <Button>Add</Button>
                                        </List.Content>
                                        {/* <Image ville src='/images/ville/' /> */}
                                        <Icon name='marker' />
                                        <List.Content>
                                            <List.Header href="#">Barcelone</List.Header>
                                            <List.Description>
                                            La métropole catalane, connue pour sa vie festive.
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content floated='right'>
                                            <Button>Add</Button>
                                        </List.Content>
                                        {/* <Image ville src='/images/ville/' /> */}
                                        <Icon name='marker' />
                                        <List.Content>
                                            <List.Header href="#">Londres</List.Header>
                                            <List.Description>
                                            La capitale britannique, connue pour son fameux brouillard.
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content floated='right'>
                                            <Button>Add</Button>
                                        </List.Content>
                                        {/* <Image ville src='/images/ville/' /> */}
                                        <Icon name='marker' />
                                        <List.Content>
                                            <List.Header href="#">Bruxelles</List.Header>
                                            <List.Description>
                                            La capitale belge, connue notamment pour son Mac&Peace.
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                <List.Item>
                                    <List.Header as='li' value='#'>L'île de la Réunion</List.Header>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Button>Add</Button>
                                    </List.Content>
                                    {/* <Image ville src='/images/ville/' /> */}
                                    <Icon name='right triangle' />
                                    <List.Content>
                                        <List.Header href="#">Le lagon</List.Header>
                                        <List.Description>
                                        Lieu de plaisance pour les autochtones et les touristes.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Button>Add</Button>
                                    </List.Content>
                                    {/* <Image ville src='/images/ville/' /> */}
                                    <Icon name='right triangle' />
                                    <List.Content>
                                        <List.Header href="#">Le piton des neiges et celui de la fournaise</List.Header>
                                        <List.Description>
                                        Lieux d'ascension privilégiés par les touristes. Le volcan est toujours en activité.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Button>Add</Button>
                                    </List.Content>
                                    {/* <Image ville src='/images/ville/' /> */}
                                    <Icon name='right triangle' />
                                    <List.Content>
                                        <List.Header href="#">Les 3 cirques</List.Header>
                                        <List.Description>
                                        Mafate, Salazie et Cilaos.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </article>
                    </section>
                </Container>
            </div>
        );
    }
}
  
