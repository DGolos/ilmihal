import {
  IonBackButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Progress } from "../../components/Progress";
import { LessonHeader } from "../../components/LessonHeader";
import useTranslation from "../../hooks/useTranslation";
import './WudhuPage.css'
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";

export const WudhuPage: React.FC = () => {
  const{translate}=useTranslation();
  return (
    <IonPage>
     <StandardHeader />
      <IonContent className="bg-image-standard" fullscreen>
      <LessonHeader title={translate("label-book1-lesson13-title")} quoteText={translate("label-book1-lesson13-quote")} quoteReference={translate("label-hadeeth-reference")} color="burgundy" />
        <div style={{marginLeft:"10px",marginRight:"10px",marginTop:"30px"}}>
          <IonSlides >
            <IonSlide >
              <IonItem className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                        {translate(
                          "label-book1-lesson13_section1-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={10}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                        {translate(
                          "label-book1-lesson13_section1-paragraph1"
                        )}
                        </h2>
                        
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 230 }}
                  src="/assets/images/WudhuHands.png"
                  alt=""
                />
                <div style={{ marginTop: "15px" }}>
                  <IonItem
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                            {translate("label-book1-lesson13_section2-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={2}
                            maxValue={10}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translate(
                              "label-book1-lesson13_section2-paragraph1"
                            )}
                            </h2>
                            
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 230 }}
                  src="/assets/images/WudhuMouth.png"
                  alt=""
                />
                <div style={{ marginTop: "15px" }}>
                  <IonItem
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                            {translate("label-book1-lesson13_section3-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={3}
                            maxValue={10}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translate(
                              "label-book1-lesson13_section3-paragraph1"
                            )}
                            </h2>
                            
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 230 }}
                  src="/assets/images/WudhuNose.png"
                  alt=""
                />
                <div style={{ marginTop: "15px" }}>
                  <IonItem
                    className="full-width lesson-note"
                    detail={false}
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                          {translate("label-book1-lesson13_section4-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={4}
                            maxValue={10}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translate(
                              "label-book1-lesson13_section4-paragraph1"
                            )}
                            </h2>
                            
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 230 }}
                  src="/assets/images/WudhuFace.png"
                  alt=""
                />
                <div style={{ marginTop: "15px" }}>
                  <IonItem
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                          {translate("label-book1-lesson13_section5-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={5}
                            maxValue={10}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translate(
                              "label-book1-lesson13_section5-paragraph1"
                            )}
                            </h2>
                            
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 230 }}
                  src="/assets/images/WudhuElbow.png"
                  alt=""
                />
                <div style={{ marginTop: "15px" }}>
                  <IonItem
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                          {translate("label-book1-lesson13_section6-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={6}
                            maxValue={10}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translate(
                              "label-book1-lesson13_section6-paragraph1"
                            )}
                            </h2>
                            
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 230 }}
                  src="/assets/images/WudhuHead.png"
                  alt=""
                />
                <div style={{ marginTop: "15px" }}>
                  <IonItem
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                          {translate("label-book1-lesson13_section7-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={7}
                            maxValue={10}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translate(
                              "label-book1-lesson13_section7-paragraph1"
                            )}
                            </h2>
                            
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 230 }}
                  src="/assets/images/WudhuEars.png"
                  alt=""
                />
                <div style={{ marginTop: "15px" }}>
                  <IonItem
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                          {translate("label-book1-lesson13_section8-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={8}
                            maxValue={10}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translate(
                              "label-book1-lesson13_section8-paragraph1"
                            )}
                            </h2>
                            
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div>
                <img
                  style={{ height: 230 }}
                  src="/assets/images/WudhuFeet.png"
                  alt=""
                />
                <div style={{ marginTop: "15px" }}>
                  <IonItem
                    detail={false}
                    className="lesson-note"
                    lines="none"
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <IonGrid className="ion-text-left">
                      <IonRow>
                        <IonCol size="6">
                          <IonChip color="burgundy">
                          {translate("label-book1-lesson13_section9-header")}
                          </IonChip>
                        </IonCol>
                        <IonCol size="6">
                          <Progress
                            currentValue={9}
                            maxValue={10}
                            color="burgundy"
                          />
                        </IonCol>
                      </IonRow>

                      <IonRow>
                        <IonCol size="12">
                          <IonText>
                            <h2 className="lesson-note">
                            {translate(
                              "label-book1-lesson13_section9-paragraph1"
                            )}
                            </h2>
                            
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </div>
              </div>
            </IonSlide>
            
            
            <IonSlide className="ion-padding">
              <IonItem className="lesson-note" lines="none">
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                      {translate("label-book1-lesson13_section10-header")}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={10}
                        maxValue={10}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                        {translate(
                              "label-book1-lesson13_section10-paragraph1"
                            )}
                        </h2>
                        
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};


