import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main className="container-fluid footer  text-center py-5">
      <section><h5>Contact Us</h5></section>
      <hr />
      <section className="py-5">
        <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between">
          <input type="text" className="form-control" placeholder="Enter your email"/>
          <button className="btn btn-info mx-2">Subscribe</button>
        </div>
          <div className="d-flex justify-content-end align-items-center">
            <Link to="" className="mx-4">
              Facebook
            </Link>
            <Link to="" className="mx-4">
              Instagram
            </Link>
            <Link to="" className="mx-4">
              Twitter
            </Link>
          </div>
        </div>
        <div className="text-center copyright">
          All Material © 2022 Emporium Pies, All Rights Reserved
        </div>
      </section>
    </main>
  );
}
