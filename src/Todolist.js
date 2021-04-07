import './Todolist.css';
import { Button, Icon, Image, List } from 'semantic-ui-react'

function Todolist() {
    return (
        <div className="Todolist">
            <header className="Todolist-header">
                <h1>Ma todolist !</h1>
            </header>
            <section className="Todolist-section">
                <h2>Ma liste de lieux à voir :</h2>
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
        </div>
    );
}
  
  export default Todolist;