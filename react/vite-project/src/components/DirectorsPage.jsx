import AddDirectorForm from "./AddDirectorForm";
import DirectorsTable from "./DirectorsTable";
import "../styles/DirectorsPage.css";
import { DeleteDirector } from "./DeleteDirector";
import UpdateDirector from "./UpdateDirector";
import SearchDirector from "./SearchDirector";

function DirectorsPage(props) {
    const directors = props.directors;
    const onDirectorCreated = props.onDirectorCreated;

    return (
        <div className="container">
            <h1>Directores</h1>
            <AddDirectorForm onDirectorCreated={ onDirectorCreated }/>
    
            <DirectorsTable directors={ directors }/>

            <hr/>

            <DeleteDirector onDirectorDeleted={ onDirectorCreated }/>

            <hr/>

            <UpdateDirector onDirectorUpdated={ onDirectorCreated }/>

            <hr/>
<<<<<<< HEAD

            <SearchDirector/>
=======
>>>>>>> 0df01e85786dea178fa5f6fbc1fa60f1c747094d
        </div>
    );
}

export default DirectorsPage;