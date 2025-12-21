 'use client';
import PageHeader from "@/components/pageheader";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <>
  <PageHeader
        title="Contact"
        description="Let's have a chat"
      /><Cal namespace="15min"
    calLink="oumaima-nadir-hayhn2/15min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
    
    
  />;
  </> 
};
  