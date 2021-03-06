import React, { Fragment } from 'react'
import Conference from 'config/conference'
import { Session, Sponsor } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { Agenda } from 'components/Agenda/Agenda'
import {
  StyledAddress,
  StyledAgendaRow,
  StyledAgendaRowList,
  StyledFeedbackActions,
  StyledTrackHeader,
  StyledUpNext,
} from 'components/Agenda/Agenda.styled'
import { AgendaProvider } from 'components/Agenda/AgendaContext'
import { AgendaSession } from 'components/Agenda/AgendaSession'
import { StyledAgendaPresenter } from 'components/Agenda/AgendaSession.styled'
import { AgendaTime } from 'components/Agenda/AgendaTime'
import { set } from 'date-fns'

interface CurrentAgendaProps {
  date: Date
  sessions?: Session[]
  sessionsUrl: string
  sponsors: Sponsor[]
  acceptingFeedback: boolean
  feedbackLink?: string
  selectedSessionId?: string
}

export const CurrentAgenda: React.FC<CurrentAgendaProps> = ({
  date,
  sessions = [],
  sessionsUrl,
  sponsors,
  acceptingFeedback,
  feedbackLink,
  selectedSessionId,
}) => {
  return (
    <Fragment>
      <p>Tap on a session to see more details&hellip;</p>

      {acceptingFeedback && (
        <StyledFeedbackActions>
          <ActionButton
            action={{ Title: 'Conference Feedback', Url: Conference.ConferenceFeedbackLink, Category: 'conference' }}
          />
          <ActionButton
            action={{ Title: 'Session feedback', Url: Conference.SessionFeedbackLink, Category: 'conference' }}
          />
        </StyledFeedbackActions>
      )}

      <Agenda
        sessions={sessions}
        sessionsUrl={sessionsUrl}
        acceptingFeedback={acceptingFeedback}
        feedbackLink={feedbackLink}
        selectedSessionId={selectedSessionId}
        render={(agendaSessions, nextSessionGroup, onSelect) => {
          return (
            <AgendaProvider
              onSelect={onSelect}
              sessions={agendaSessions}
              sponsors={sponsors}
              rooms={Conference.RoomNames}
            >
              {Conference.ShowNextSessions && nextSessionGroup && nextSessionGroup.sessions.length > 0 && (
                <StyledUpNext>
                  <h2>Up next</h2>
                  <StyledAgendaRow>
                    <AgendaTime time={nextSessionGroup.timeStart} />
                    {nextSessionGroup.sessions.map((session, index) => (
                      <AgendaSession
                        key={session.Id}
                        sessionId={session.Id}
                        fullWidth={nextSessionGroup.sessions.length === 1}
                        room={index}
                        alwaysShowRoom={true}
                      />
                    ))}
                  </StyledAgendaRow>
                </StyledUpNext>
              )}

              <StyledAgendaRowList>
                <li>Time</li>
                <li>Theatre</li>
                <li>RR5</li>
                <li>M6</li>
                <li>M7</li>
                <li>M8</li>
                <li>M9</li>
              </StyledAgendaRowList>
              <StyledAgendaRow>
                <AgendaTime time={date} />
                <AgendaSession room="Riverside Foyer (Level 2)" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Registration</StyledTrackHeader>
                  <StyledAddress>
                    Perth Convention and Exhibition Centre
                    <br />
                    21 Mounts Bay Rd, Perth
                  </StyledAddress>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { minutes: 45 })} />
                <AgendaSession room="Riverside Theatre" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Welcome and housekeeping</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 9 })} />
                <AgendaSession room="Riverside Theatre" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Welcome to country</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 9, minutes: 10 })} />
                <AgendaSession
                  sessionId="112b54cc-df00-40fd-ad5e-4b0714329821"
                  sponsorId="bhp"
                  room="Riverside Theatre"
                  renderPresenters={(presenters) => (
                    <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                  )}
                  fullWidth
                  isKeynote
                  alwaysShowRoom
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 9, minutes: 55 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 10, minutes: 5 })} />
                <AgendaSession room={0} sessionId="ae58057e-2cea-4300-bdb7-f51d57476179" />
                <AgendaSession room={1} sessionId="8cd14aaa-89cb-4886-9649-ceb0cd4b27d1" />
                <AgendaSession room={2} sessionId="385e78cf-b12a-466c-9fb8-e29c7fd627fb" />
                <AgendaSession room={3} sessionId="c044309e-e859-4b5c-adad-7534a36284e0" />
                <AgendaSession room={4} sessionId="b73abc43-7634-40d3-a38b-696bdb844cc0" />
                <AgendaSession room={5} sessionId="cc740103-612c-4673-b293-97487787f093" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 10, minutes: 25 })} />
                <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Morning tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 10, minutes: 55 })} />
                <AgendaSession room={0} sessionId="f8967843-c437-4a90-9242-fac45c4ea1a6" />
                <AgendaSession room={1} sessionId="cea40511-0eeb-4ac8-8c1e-098a966f7314" />
                <AgendaSession room={2} sessionId="643434fc-64d5-49ba-a1d8-848a7570b6fa" />
                <AgendaSession room={3} sessionId="df03352d-b177-420d-b66a-b1c174e3e0a3" />
                <AgendaSession room={4} sessionId="b446c945-6210-4b56-bc78-772347060a5b" />
                <AgendaSession room={5} sessionId="2fff2f0e-7f55-4a26-bf15-7537a6c3f700" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 11, minutes: 40 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 11, minutes: 50 })} />
                <AgendaSession room={0} sessionId="7bb9859c-ed23-4569-b863-7b4c440b2b88" />
                <AgendaSession room={1} sessionId="9c81bbdb-8898-4259-afac-0dc73ff363b5" />
                <AgendaSession room={2} sessionId="24ad37da-2c0b-4f5c-afde-3266217e6d80" />
                <AgendaSession room={3} sessionId="3c2badde-1534-494b-a084-8ca5857d648d" />
                <AgendaSession room={4} sessionId="f3a57e6c-0325-4898-bffd-2d3040f5dee9" />
                <AgendaSession room={5} sessionId="adbcf783-1ab2-456b-ba41-1041f139e3f2" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 12, minutes: 10 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 12, minutes: 20 })} />
                <AgendaSession room={0} sessionId="9b7efb7a-64e0-41ac-9439-f65a662147da" />
                <AgendaSession room={1} sessionId="6d6553c0-b678-434d-b94e-c46fe77c86eb" />
                <AgendaSession room={2} sessionId="0bcae524-eb87-4080-b189-ab5c7d5ad5fa" />
                <AgendaSession room={3} sessionId="5aba6e83-cfd9-4114-af80-f28de931d8c2" />
                <AgendaSession room={4} sessionId="fd0518e0-a52c-44dd-84fb-61ce59c3cdb5" />
                <AgendaSession room={5} sessionId="70537fd7-4e49-4100-97ee-ce79c71545d6" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 13, minutes: 5 })} />
                <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Lunch</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 14, minutes: 5 })} />
                <AgendaSession room={0} sessionId="a6eb8bb3-6086-4cb3-b024-d0a6c4dd3de3" />
                <AgendaSession room={1} sessionId="a577e148-b1d7-42e1-a424-5d0db3107ae2" />
                <AgendaSession room={2} sessionId="2fcea05c-96dc-4802-b8a9-14bcfee01a64" />
                <AgendaSession room={3} sessionId="97792db7-0c73-4fee-91c3-00d7fe002540" />
                <AgendaSession room={4} sessionId="fa861d2a-9597-4a98-8510-fc0dc0b400e6" />
                <AgendaSession room={5} sessionId="83b6a640-935b-4e5e-b251-81c3d69c0129" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 14, minutes: 25 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 14, minutes: 35 })} />
                <AgendaSession room={0} sessionId="b2795175-d14d-4090-a62e-153d4534b916" />
                <AgendaSession room={1} sessionId="80721e7b-b082-4b50-9a9d-136d3054b7b0" />
                <AgendaSession room={2} sessionId="94a2f4b3-bd6e-4eb6-9917-baa3bcb3d41f" />
                <AgendaSession room={3} sessionId="f548e402-d04d-4318-a8c6-d879b3f11d37" />
                <AgendaSession room={4} sessionId="00311b92-6c21-47a8-b8d2-af325581d6f9" />
                <AgendaSession room={5} sessionId="35e1174f-8d50-48db-a410-d53c3c8ddf73" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 15, minutes: 20 })} />
                <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Afternoon tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 15, minutes: 50 })} />
                <AgendaSession room="Riverside Theatre" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Prize Draw</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 16, minutes: 20 })} />
                <AgendaSession
                  sessionId="4c019f6f-c312-4bb9-8024-3352f6034d6e"
                  sponsorId="yow"
                  room="Riverside Theatre"
                  renderPresenters={(presenters) => (
                    <StyledAgendaPresenter>Locknote: {presenters}</StyledAgendaPresenter>
                  )}
                  fullWidth
                  isKeynote
                  alwaysShowRoom
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 17, minutes: 5 })} />
                <AgendaSession room="Riverside Theatre" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Thank yous and wrap up</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime
                  time={set(date, { hours: 17, minutes: 10 })}
                  endTime={set(date, { hours: 19, minutes: 0 })}
                />
                <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Afterparty</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
            </AgendaProvider>
          )
        }}
      />
    </Fragment>
  )
}

CurrentAgenda.displayName = 'CurrentAgenda'
