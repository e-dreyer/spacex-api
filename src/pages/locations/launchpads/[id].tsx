//import React from "react";
//import { useRouter } from "next/router";
//import { useQuery, gql } from "@apollo/client";

//import AsyncPage from "../../../components/asyncPage/AsyncPage";
//import LaunchpadCard from "../../../components/cards/LaunchpadCard";

//import { Launchpad } from "../../../types/types";

//export default function LaunchpadPage() {
//  const router = useRouter();
//  const { id } = router.query;
//  const { loading, error, data } = useQuery<{ launchpad: Launchpad }>(
//    gql`
//    {
//        launchpad (id: "${id}"){
//          name
//          id
//          details
//          location {
//            latitude
//            longitude
//            name
//            region
//          }
//          status
//          successful_launches
//          wikipedia
//        }
//      }
//    `
//  );

//  return (
//    <>
//      <AsyncPage data={data} loading={loading} error={error}>
//        <LaunchpadCard launchpad={data?.launchpad} />
//      </AsyncPage>
//    </>
//  );
//}
