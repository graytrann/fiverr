import React, { useEffect, useState } from "react";
import BelowInfoStyles from "./BelowInfo.module.scss";
import { UpdateUserInfo } from "../../../apis/user";
import { AiFillHeart, AiOutlineClose, AiOutlineSave } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import Swal from "sweetalert2";

export default function BelowInfo({ userInfo }) {
  const [isAddingNewSkill, setIsAddingNewSkill] = useState(false);
  const [isAddingNewCertification, setIsAddingNewCertification] =
    useState(false);

  const [skill, setSkill] = useState([]);
  const [certification, setCertification] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValueCer, setInputValueCer] = useState("");
  const [submit, setSubmit] = useState(false);
  const [updateSkill, setUpdateSkill] = useState(false);
  const [updateCertification, setUpdateCertification] = useState(false);

  useEffect(() => {
    setSubmit(false);
  }, [submit]);

  useEffect(() => {
    // Update skill state when userInfo changes
    if (userInfo) {
      setSkill(userInfo.skill || []); // Assuming userInfo has a skill property
      setCertification(userInfo.certification || []);
    }
  }, [userInfo]);

  const handleAddNewSkill = () => {
    setIsAddingNewSkill(true);
    setUpdateSkill(true);
  };

  const handleAddNewCertification = () => {
    setIsAddingNewCertification(true);
    setUpdateCertification(true);
  };

  const handleSkillInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCertificationInputChange = (e) => {
    setInputValueCer(e.target.value);
  };

  const handleSaveNewSkill = () => {
    setSkill([...skill, inputValue]);
  };

  const handleSaveNewCertification = () => {
    setCertification([...certification, inputValueCer]);
  };

  const handleRemoveSkill = (index) => {
    setUpdateSkill(true);
    const newSkill = [...skill];
    newSkill.splice(index, 1);
    setSkill(newSkill);
  };

  const handleRemoveCertification = (index) => {
    setUpdateCertification(true);
    const newCertification = [...certification];
    newCertification.splice(index, 1);
    setCertification(newCertification);
  };

  const handleUpdateUserInfo = () => {
    UpdateUserInfo(userInfo.id, { ...userInfo, skill, certification });
    setSubmit(true);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Đã cập nhật bio của bạn <3",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  console.log(skill);

  return (
    // SKILLS
    <div className={`${BelowInfoStyles.belowInfo}`}>
      <div className={`${BelowInfoStyles.belowInfo_container}`}>
        <div className={`${BelowInfoStyles.belowInfo_container_item}`}>
          <p className="fw-bold mt-2">Skills</p>

          {skill.map((kyNang, index) => {
            return (
              <div className="d-flex justify-content-between">
                <p className="d-flex align-items-center">
                  <AiFillHeart className="me-1"></AiFillHeart>
                  {kyNang}
                </p>
                <button
                  className={`${BelowInfoStyles.button_remove}`}
                  onClick={() => handleRemoveSkill(index)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            );
          })}
          {isAddingNewSkill ? (
            <div>
              <input
                placeholder="...add new skill"
                type="text"
                value={inputValue}
                onChange={handleSkillInputChange}
              />
              <button
                className={`${BelowInfoStyles.button_save}`}
                onClick={handleSaveNewSkill}
              >
                <AiOutlineSave size={25} />
              </button>
              <button
                className={`${BelowInfoStyles.button_remove}`}
                onClick={() => {
                  setIsAddingNewSkill(false);
                }}
              >
                <FcCancel size={25} />
              </button>
            </div>
          ) : (
            <p
              className={`${BelowInfoStyles.add} text-primary`}
              onClick={handleAddNewSkill}
            >
              Add new
            </p>
          )}
          {updateSkill && (
            <button
              className={`${BelowInfoStyles.button_save} mt-2`}
              onClick={handleUpdateUserInfo}
            >
              <p className="fw-bold">UPDATE</p>
            </button>
          )}
        </div>
      </div>
      {/* CERTIFICATIONS */}
      <div className={`${BelowInfoStyles.belowInfo_container} mt-4`}>
        <div className={`${BelowInfoStyles.belowInfo_container_item}`}>
          <p className="fw-bold mt-2">Certification</p>

          {certification.map((kyNang, index) => {
            return (
              <div className="d-flex justify-content-between">
                <p className="d-flex align-items-center">
                  <AiFillHeart className="me-1"></AiFillHeart>
                  {kyNang}
                </p>
                <button
                  className={`${BelowInfoStyles.button_remove}`}
                  onClick={() => handleRemoveCertification(index)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            );
          })}
          {isAddingNewCertification ? (
            <div>
              <input
                placeholder="...add new skill"
                type="text"
                value={inputValueCer}
                onChange={handleCertificationInputChange}
              />
              <button
                className={`${BelowInfoStyles.button_save}`}
                onClick={handleSaveNewCertification}
              >
                <AiOutlineSave size={25} />
              </button>
              <button
                className={`${BelowInfoStyles.button_remove}`}
                onClick={() => {
                  setIsAddingNewSkill(false);
                }}
              >
                <FcCancel size={25} />
              </button>
            </div>
          ) : (
            <p
              className={`${BelowInfoStyles.add} text-primary`}
              onClick={handleAddNewCertification}
            >
              Add new
            </p>
          )}
          {updateCertification && (
            <button
              className={`${BelowInfoStyles.button_save} mt-2`}
              onClick={handleUpdateUserInfo}
            >
              <p className="fw-bold">UPDATE</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
