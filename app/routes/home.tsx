import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import {ArrowRight, ArrowUpRight, Clock, Layers} from "lucide-react";
import Button from "../../components/ui/Button";

import {useNavigate} from "react-router";
import {useEffect, useRef, useState} from "react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pulse"></div>
          </div>

          <p className="text">Introducing Roomify</p>
        </div>

        <h1>
          Build beautiful spaces at the speed of thought with roomify
        </h1>

        <p className="subtitle">
          Roomify is an AI-first design environment that helps you visualize, render, and ship architectural projects faster  than ever.
        </p>

        <div className="actions">
          <a href="#upload" className="cta">
             Start Building <ArrowRight className="icon" />
          </a>

          <Button variant="outline" size="lg" className="demo">
                      Watch Demo
          </Button>

        </div>

        <div id="upload" className="upload-shell">
          <div className="grid-overlay" />

            <div className="upload-card">
              <div className="upload-head">
                  <div className="upload-icon">
                      <Layers className="icon" />
                  </div>

                  <h3>Upload your floor plan</h3>
                  <p>Supports JPG, PNG, formats up to 10MB</p>
              </div>

              <p>upload images</p>
            </div>
          </div>
      </section>

      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>See Projects</h2>
              <p>Your latest work and shared community projects, all in one place.</p>
            </div>

          </div>

          <div className="project-list">
            <div className="project-card group">
              <div className="preview">
                <img src="https://images.squarespace-cdn.com/content/v1/5c597f4934c4e2e36920ca80/59378ad5-f888-4a75-ba3a-e75b45d6380f/3D%2BPrinted%2BSite%2BModel%2B-%2BSLA%2BResin+%281%29.png" alt="Project Preview" />
                <div className="badge">
                  <span>Community</span>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3>Project Greater Kailash</h3>

                  <div className="meta">
                    <Clock size={12} />
                    <span>{new Date('01.01.2023').toLocaleDateString()}</span>
                    <span>By Gaurav</span>
                  </div>
                </div>
                <div className="arrow">
                  <ArrowUpRight size={18}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
    </div>
  );
}
