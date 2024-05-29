import Chart from "./Chart";

const Page = () => {
  return (
    <div className="h-[500px] max-w-3xl mx-auto">
      <Chart />
      <div className="h-[1000px] bg-slate-300 text-xl p-4">
        <p>
          Without scrolling, the download button appears where it should be when
          you right click the chart...
        </p>
        <p>
          But if you scroll down and right click the chart it seems to be
          offset...
        </p>
      </div>
    </div>
  );
};

export default Page;
