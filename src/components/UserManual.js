import {useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './user-manual.css';
import {user_manual_data } from '../data/data';

const UserManual = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className="overview-side">
            <div className="info-container"> 
                {user_manual_data.map((item, index) => (
                    <div id={`section${index}`} key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        {item.subItems && (
                            <ul>
                                {item.subItems.map((subItem, subIndex) => (
                                    <div id={`subSection${index}${subIndex}`} key={subIndex}>
                                        <h3>{subItem.title}</h3>
                                        <p>{subItem.content}</p>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <button className="btn-back" onClick={() => navigate('/')}><FontAwesomeIcon icon={faRightToBracket} /> HomePage</button>
            <div className="list">
                <h2>Danh mục</h2>
                <ul>
                    {user_manual_data.map((item, index) => (
                        <li key={index}>
                            <a href={`#section${index}`}>{item.title}</a>
                            {item.subItems && (
                                <ul>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex}><a href={`#subSection${index}${subIndex}`}>{subItem.title}</a></li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>     
        </>
    )  
}  
export default UserManual;
