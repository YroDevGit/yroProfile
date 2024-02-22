const ImageModule = ({children}) =>{
    return(
        <div className="row g-3 mb-4">
                {children}
        </div>
    );
}

const ImageCard = ({image}) =>{
    return(
            <div className="col-sm-6">
                <img className="img-fluid rounded" src={"img/"+image} height="259" width="259" alt=""></img>
            </div>
    );
}


export {ImageModule, ImageCard};