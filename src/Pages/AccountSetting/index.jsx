import { TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { authApi } from "src/Api";
import { StyledAccountPage, StyledUpdateButton, AvatarComponent, LoadingOverLay } from "src/Components";
import { getInfo, authSelector } from "src/Redux";

export const AccountSetting = () => {
    const userInfo = useSelector(authSelector).userInfo;
    const [updateInfo, setUpdateInfo] = useState({
        username: userInfo.username,
        // avatar: null
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isValidForm, setIsValidForm] = useState(false);
    // const avatarInputRef = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChangeUsername = (event) => {
        setUpdateInfo({
            ...updateInfo,
            username: event.target.value
        });
    };

    // const handleChangeAvatar = (event) => {
    //     setUpdateInfo({
    //         ...updateInfo,
    //         avatar: event.target.files[0]
    //     });
    // };
    
    useEffect(() => {
        if (!updateInfo.username.trim() || updateInfo.username.trim().length > 36) {
            setIsValidForm(false);
        } else {
            setIsValidForm(true);
        }
    }, [updateInfo]);

    const handleUpdate = async () => {
        try {
            setIsLoading(true);
            setIsValidForm(false);
            // formData.append("avatar", updateInfo.avatar);
            await authApi.updateInfo({
                username: updateInfo.username
            });
            toast.success("Cập nhật thành công!");
            dispatch(getInfo());
        } catch (err) {
            console.log(err);
            toast.error("Cập nhật không thành công!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <StyledAccountPage>
            <div className="infoWrapper">
                <div className="generalInfo">
                    <h2 className="heading">Thông tin tài khoản:</h2>
                    <div className="generalInfoWrapper">
                        <AvatarComponent avatarUrl={userInfo.avatarUrl} width={150} />
                        <div className="userInfo">
                            <p className="username">Username: <br />
                                <span className="value">{userInfo.username}</span>
                            </p>
                            <p className="email">Email: <br />
                                <span className="value">{userInfo.email}</span>
                            </p>
                            <p className="followers">Followers: {userInfo.followers}</p>
                        </div>
                    </div>
                </div>
                <div className="update">
                    <h2 className="heading">Cập nhật thông tin tài khoản:</h2>
                    <div className="updateInfo">
                        <div className="updateItem">
                            <TextField 
                                label="Username"
                                variant="outlined"
                                value={updateInfo.username}
                                onChange={handleChangeUsername}
                                fullWidth
                            />
                        </div>
                        {/* <div className="updateItem avatar">
                            <label className="labelAvatar" htmlFor="avatarInput">Avatar:</label><br />
                            <input ref={avatarInputRef} id="avatarInput" type="file" accept="image/*" onChange={handleChangeAvatar} />
                        </div> */}
                    </div>
                    <StyledUpdateButton disabled={!isValidForm} onClick={handleUpdate}>
                        Cập nhật
                    </StyledUpdateButton>
                </div>
            </div>
            {isLoading ? <LoadingOverLay /> : <></>}
        </StyledAccountPage>
    );
};