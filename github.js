class GitHub {
  constructor(){
    this.client_id = '176dead2cfbf38b27edf';
    this.client_secret = 'fa3990843dd6db5228bc120aa176ba01d4717618';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return{
      profile: profileData
    }
  }
}