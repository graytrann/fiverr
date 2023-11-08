import React, { useState } from "react";
import BelowInfoStyles from "./BelowInfo.module.scss";

export default function BelowInfo({ userInfo }) {
  const [isAddingNewSkill, setIsAddingNewSkill] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const handleAddNewSkill = () => {
    setIsAddingNewSkill(true);
  };

  const handleSkillInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleSaveNewSkill = () => {
    // Thêm logic để lưu newSkill vào danh sách kỹ năng (hoặc làm gì bạn cần ở đây)
    // Sau khi lưu, bạn có thể đặt lại trạng thái để ẩn input và xóa giá trị mới
    setIsAddingNewSkill(false);
    console.log(newSkill);
  };

  return (
    <div className={`${BelowInfoStyles.belowInfo}`}>
      <div className={`${BelowInfoStyles.belowInfo_container}`}>
        <div className={`${BelowInfoStyles.belowInfo_container_item}`}>
          <p>Skills</p>
          {isAddingNewSkill ? (
            <div>
              <input
                type="text"
                value={newSkill}
                onChange={handleSkillInputChange}
              />
              <button onClick={handleSaveNewSkill}>Save</button>
            </div>
          ) : (
            <p
              className={`${BelowInfoStyles.add} text-primary`}
              onClick={handleAddNewSkill}
            >
              Add new
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
