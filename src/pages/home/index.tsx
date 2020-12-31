import './index.less'

import { Avatar, Badge, Divider, Tabs } from 'antd'
import React from 'react'
import { Emojione } from 'react-emoji-render'

const { TabPane } = Tabs

export default function Home() {
  return (
    <div className="main-home">
      <div className="div-1">
        <div className="div-1-1">
          <Badge count={28}>
            <Avatar src={`xiangp7.jpg`} className="home-avatar" />
          </Badge>
        </div>
        <div className="div-1-2">
          <p>
            <Emojione text="💂🏻‍" />
            <span className="text"> LI Xiang - 李想</span>
          </p>
          <p>
            <Emojione text=":email:" />
            <span className="text"> xiangfr007@gmail.com</span>
          </p>
          <p>
            <Emojione text=":email:" />
            <span className="text"> yigelixiang@foxmail.com (China)</span>
          </p>
        </div>
      </div>
      <div className="only-mobile only-mobile-home-avatar">
        <Avatar src={`douyin.jpg`} className="home-avatar" />
      </div>
      <div className="div-2">
        <div className="div-2-1">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
          >
            <p>
              <img className="home-img-20" src={`youtube.png`} />
              <span className="text link"> Subscribe me on Youtube</span>
            </p>
          </a>
          <a target="_blank" href="https://www.ixigua.com/home/105169725727/">
            <p>
              <img className="home-img-20" src={`xigua.png`} />
              <span className="text link">在 西瓜视频 关注我</span>
            </p>
          </a>
          <a target="_blank" href="https://space.bilibili.com/520811931">
            <p>
              <img className="home-img-20" src={`bilibili.png`} />
              <span className="text link">在 Bilibili 关注我</span>
            </p>
          </a>
          <a target="_blank" href="https://github.com/MagicienDeCode">
            <p>
              <img className="home-img-20" src={`github.png`} />
              <span className="text link"> Follow me on Github</span>
            </p>
          </a>
        </div>
        <div className="div-2-2">
          <Avatar src={`douyin.jpg`} className="home-avatar" />
        </div>
      </div>

      <Divider>
        <img className="home-img-15-5" src={`star.png`} />
        <span className="text"> Self-Introduction</span>
      </Divider>
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab={<img className="home-img-20" src={`fr.png`} />} key="1">
            <ul>
              <li>
                <span className="intro ">
                  Je me définis comme étant une personne passionnée et
                  organisée. Je suis rigoureux, efficace et j'apprécie le
                  travail de qualité.
                </span>
              </li>
              <li>
                <span className="intro">
                  En tant que développeur curieux et perfectionniste, j'ai une
                  grande faculté d'apprentissage et j'apprécie de travailler sur
                  des projets ambitieux et challengeant.
                </span>
              </li>
              <li>
                <span className="intro ">
                  Je me définis comme étant une personne passionnée et
                  organisée. Je suis rigoureux, efficace et j'apprécie le
                  travail de qualité.
                </span>
              </li>
              <li>
                <span className="intro">
                  En tant que développeur curieux et perfectionniste, j'ai une
                  grande faculté d'apprentissage et j'apprécie de travailler sur
                  des projets ambitieux et challengeant.
                </span>
              </li>
              <li>
                <span className="intro">
                  J’apprends constamment sur les nouvelles technologies, et
                  j’entreprends des nouveaux projets personnels afin
                  d'approfondir mes connaissances ainsi que de pouvoir proposer
                  des solutions adaptées au travail.
                </span>
              </li>
              <li>
                <span className="intro">
                  J'aime particulièrement travailler en équipe mais je sais
                  aussi être autonome quand il le faut.
                </span>
              </li>
              <li>
                <span className="intro">
                  Je m'épanouis non seulement en travaillant, mais aussi en
                  apportant de la valeur à l'entreprise, dans laquelle la
                  capacité à relever des défis, à reconnaître et rectifier ses
                  erreurs et à se montrer tenace est essentielle.
                </span>
              </li>
            </ul>
          </TabPane>
          <TabPane tab={<img className="home-img-20" src={`zh.png`} />} key="2">
            <p>
              <span className="intro ">Coming</span>
            </p>
          </TabPane>
          <TabPane tab={<img className="home-img-20" src={`uk.png`} />} key="3">
            <p>
              <span className="intro ">Coming</span>
            </p>
          </TabPane>
          <TabPane tab={<img className="home-img-20" src={`ja.png`} />} key="4">
            <p>
              <span className="intro ">Coming</span>
            </p>
          </TabPane>
          <TabPane tab={<img className="home-img-20" src={`de.png`} />} key="5">
            <p>
              <span className="intro ">Coming</span>
            </p>
          </TabPane>
          <TabPane tab={<img className="home-img-20" src={`es.png`} />} key="6">
            <p>
              <span className="intro ">Coming</span>
            </p>
          </TabPane>
        </Tabs>
      </div>
      <Divider>
        <img
          className="home-img-15-5"
          src={
            'http://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f6e0.png'
          }
        />
        <span className="text"> Competences</span>
      </Divider>
      <div className="competences">
        <ul>
          <li>
            <span className="intro">
              <img className="home-img-15-5" src={`spring.png`} />
              Spring /
              <img className="home-img-15-5" src={`spring-boot.png`} />
              Spring Boot / Spring Security
            </span>
          </li>
          <li>
            <span className="intro">
              <img className="home-img-15-5" src={`react.png`} />
              React /
              <img className="home-img-15-5" src={`gatsbyjs.png`} />
              GatsbyJS /
              <img className="home-img-15-5" src={`angular.png`} />
              Angular
            </span>
          </li>
          <li>
            <span className="intro">
              <img className="home-img-15-5" src={`gradle.png`} />
              Gradle / Maven
            </span>
          </li>
          <li>
            <span className="intro">
              <img className="home-img-15-5" src={`java.png`} />
              Java /
              <img className="home-img-15-5" src={`kotlin.png`} />
              Kotlin
            </span>
          </li>
          <li>
            <span className="intro">
              <img className="home-img-15-5" src={`bank.png`} />
              Financial knowledge
            </span>
          </li>
          <li>
            <span className="intro">
              <img className="home-img-15-5" src={`mysql.png`} />
              MySQL /
              <img className="home-img-15-5" src={`dynamodb.png`} />
              DynamoDB /
              <img className="home-img-15-5" src={`mongodb.png`} />
              MongoDB
            </span>
          </li>
          <li>
            <span className="intro">
              <img className="home-img-15-5" src={`docker.png`} />
              Docker /
              <img className="home-img-15-5" src={`dkc.png`} />
              docker-compose
            </span>
          </li>
          <li>
            <span className="intro">
              <img className="home-img-15-5" src={`algo.png`} />
              Algorithm
            </span>
          </li>
        </ul>
      </div>
      <Divider className="education-divider">
        <img
          className="home-img-15-5"
          src={
            'http://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f393.png'
          }
        />
        <span className="text"> Education</span>
      </Divider>
      <div className="education">
        <ul>
          <li>
            <span className="intro">Master 2 (BAC+5) - Informatique</span>
            <ul>
              <li>
                <span className="intro">
                  Université Paris Diderot ( Paris 7 )
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span className="intro">Langue française</span>
            <ul>
              <li>
                <span className="intro">
                  Université Paris Diderot ( Paris 7 )
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span className="intro-small">信息管理与信息系统</span>
            <ul>
              <li>
                <span className="intro-small">河南财经政法大学</span>
              </li>
            </ul>
          </li>
          <li>
            <span className="intro-small">理科</span>
            <ul>
              <li>
                <span className="intro-small">开封高中</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Divider>
        <img
          className="home-img-15-5"
          src={
            'http://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f525.png'
          }
        />
        <span className="text"> Interests</span>
      </Divider>
      <div className="interests">
        <ul>
          <li>
            <span className="intro">
              <img
                className="home-img-15-5"
                src={
                  'http://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f4da.png'
                }
              />
              Reading - Book is my friend, always.
            </span>
          </li>
          <li>
            <span className="intro">
              <img
                className="home-img-15-5"
                src={
                  'http://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f3a5.png'
                }
              />
              Movie - Like life
            </span>
          </li>
          <li>
            <span className="intro">
              <img
                className="home-img-15-5"
                src={
                  'http://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f483.png'
                }
              />
              Tango - L'élégance dont je ne suis pas encore doté
            </span>
          </li>
          <li>
            <span className="intro">
              <img
                className="home-img-15-5"
                src={
                  'http://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f340.png'
                }
              />
              Chinese poetry - <span className="intro-small">诗和远方</span>
            </span>
          </li>
          <li>
            <span className="intro">
              <img
                className="home-img-15-5"
                src={
                  'http://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f339.png'
                }
              />
              Literature / Languages
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
