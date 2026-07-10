import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="spline-frame" style={{ width: "100%", minHeight: "520px" }}>
      <Spline
        scene="https://prod.spline.design/zOfkvlCyGD7AkV0a/scene.splinecode"
        className="spline-viewer"
      />
    </div>
  );
}
