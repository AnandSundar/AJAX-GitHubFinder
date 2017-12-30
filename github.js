class GitHub {
  constructor(){
    this.client_id = '176dead2cfbf38b27edf';
    this.client_secret = 'fa3990843dd6db5228bc120aa176ba01d4717618';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return{
      profile: profileData,
      repos: repoData
    }
  }

}