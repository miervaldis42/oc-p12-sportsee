/**
 * Class representing the user's average sessions.
 */
class AverageSessions {
  /**
   * Creates the user's average sessions data.
   * @param   {Number}    data.userId                    The user's id.
   * @param   {Object[]}  data.sessions                  The user's session.
   * @param   {Number}    data.sessions[].day            Session day.
   * @param   {Number}    data.sessions[].sessionLength  Session length.
   */
  constructor(data) {
    this.sessions = data.sessions ?? [];
  }
}

export default AverageSessions;
