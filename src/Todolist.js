import './Todolist.css';
import { List } from 'semantic-ui-react'

function Todolist() {
    return (
      <div className="Todolist">
        <header className="Todolist-header">
          <h1>Ma todolist !</h1>
        </header>
        <section className="Todolist-section">
            <h2>Ma liste de lieux à voir :</h2>
            <List as='ol'>
                <List.Item as='li' value='*'>
                Nantes
                </List.Item>
                <List.Item as='li' value='*'>
                Paris
                </List.Item>
                <List.Item as='li' value='*'>
                Etranger
                <List.Item as='ol'>
                    <List.Item as='li' value='-'>
                    Madrid
                    </List.Item>
                    <List.Item as='li' value='-'>
                    Londres
                    </List.Item>
                    <List.Item as='li' value='-'>
                    Bruxelles
                    </List.Item>
                </List.Item>
                </List.Item>
                <List.Item as='li' value='#'>
                Réunion
                </List.Item>
            </List>
        </section>
      </div>
    );
  }
  
  export default Todolist;