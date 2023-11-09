import React from "react";
import ProfileStyles from "./Profile.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../../context/UserContext";
import { getUserInfo } from "../../apis/user";
import TopInfo from "./TopInfo";
import BelowInfo from "./BelowInfo/BelowInfo";
import HiredJob from "./HiredJob";

export default function Profile() {
  const { currentUser } = useUserContext();

  const { data: userInfo = {}, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => await getUserInfo(currentUser.user.id),
  });
  const isFetched = !!Object.keys(userInfo).length;

  if (isLoading || !isFetched) {
    // Hiển thị giao diện loading hoặc thông báo đợi
    return <p>Đợi</p>;
  }
  return (
    <div className={`${ProfileStyles.profile}`}>
      <div className={`${ProfileStyles.profile_container}`}>
        <div className="row">
          <div className="col-4">
            <TopInfo userInfo={userInfo} />
            <BelowInfo userInfo={userInfo} />
          </div>
          <div className="col-8">
            <HiredJob />
          </div>
        </div>
      </div>
    </div>
  );
}
