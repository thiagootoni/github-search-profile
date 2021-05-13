import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import Button from "../../core/components/Button";
import { User } from "../../core/types/User";
import makeRequest from "../../core/utils/request";
import CardResponse from "./Components/CardResponse";
import "./styles.scss";

const Search = () => {
    const [userName, setUserName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        makeRequest({ url: `/users/${userName}`, method: "GET" })
            .then((response) => {                
                setUser(response.data);
                setIsLoading(false);
            }).catch( () => {
                setUser(undefined)
                setIsLoading(false);
            });            
    };

    console.log(user?.name)

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <div className="card-search bd-radius-10">
                    <div className="title-search">
                        <h3>Econtre um peril no Github</h3>
                    </div>
                    <div className="input-search">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="digite o nome do perfil..."
                            value={userName}
                            onChange={handleOnChange}
                        />
                    </div>
                    <Button text={"Encontrar"} />
                </div>
                {isLoading ? (
                    <ContentLoader className="card-response bd-radius-10"/>
                ) : (
                    user && <CardResponse gitUser={user} />
                )}
            </form>
        </>
    );
};

export default Search;
