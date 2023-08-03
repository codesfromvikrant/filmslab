"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import apiSettings from "@/api";
import axios from "axios";
import Info from "@/components/Info";
import CastCrew from "@/components/CastCrew";

const Infopage = () => {
  const [details, setDetails] = useState();
  const searchParams = useSearchParams();
  const mediaType = searchParams.get("media_type");
  const id = searchParams.get("id");

  useEffect(() => {
    (async function () {
      const res = await axios.get(
        `${apiSettings.baseUrl}${mediaType}/${id}${apiSettings.urlQuery}`
      );
      setDetails(res.data);
    })();
  }, [mediaType, id]);

  console.log(details);

  return (
    <main>
      {details && <Info data={details} media_type={mediaType} />}
      <CastCrew />
    </main>
  );
};

export default Infopage;
