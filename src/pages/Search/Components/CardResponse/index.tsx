import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../core/components/Button";
import Tag from "../../../../core/components/Tag";
import { User } from "../../../../core/types/User";
import "./styles.scss";

type Props = {
    gitUser: User;
};

const CardResponse = ({ gitUser }: Props) => {
    return (
        <>
            <div className="card-response bd-radius-10">
                <div className="rowOne">
                    <div className="avatar-container">
                        <img
                            className="avatar"
                            src={gitUser?.avatar_url}
                            alt="foto de perfil"
                        />
                    </div>

                    <div className="card-info bd-radius-5">
                        <div className="repo-info">
                            <Tag
                                name={"Repositorios públicos"}
                                info={gitUser?.public_repos + ""}
                            />
                            <Tag
                                name={"Seguidores"}
                                info={gitUser?.followers + ""}
                            />
                            <Tag
                                name={"Seguindo"}
                                info={gitUser?.following + ""}
                            />
                        </div>

                        <div className="subcard-info">
                            <div className="info-title">Informações</div>
                            <div className="infos">
                                <Tag
                                    name={"Empresa"}
                                    info={gitUser?.company || "Não vinculado"}
                                    size={"large"}
                                />
                                <Tag
                                    name={"Website/Blog"}
                                    info={gitUser?.blog || "Não informado"}
                                    size={"large"}
                                />
                                <Tag
                                    name={"Localidade"}
                                    info={gitUser?.location || "Não informado"}
                                    size={"large"}
                                />
                                <Tag
                                    name={"Membro desde"}
                                    info={dayjs(gitUser?.created_at).format('DD/MM/YYYY')}
                                    size={"large"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rowTwo">
                    <a
                        href={gitUser?.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-styled"
                    >
                        Ver perfil
                    </a>
                </div>
            </div>
        </>
    );
};

export default CardResponse;
